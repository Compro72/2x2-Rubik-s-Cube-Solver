# 2x2 Rubik's Cube Solver

A JavaScript implementation of an optimal-move 2x2 Rubik's Cube solver featuring an interactive 2D/3D interface and a bi-directional BFS algorithm.

---

## Live Demo

[**Click here to open the live webpage**](https://compro72.github.io/2x2-Rubik-s-Cube-Solver/)

![2x2 Rubik's Cube Solver Webpage](main.png)

---

## Features

- **Interactive Interface:** A 2D and 3D interactive 2x2 Rubik's Cube built with CSS transforms.
- **Random Scrambler:** A cube scrambler for testing the solver.
- **Optimal Search Engine:** A bi-directional breadth-first search implementation for finding the optimal solution.
- **Pre-computed State Tree:** Pre-computed search tree for the first 7 moves from the solved state.
- **Visual Move Guides:** Automatically generated images for an intuitive visual solution.
- **State Space Reduction:** Automatic orientation normalization to reduce the branching factor of the search from 18 to 9.

---

## Technical Description

The move system used in this solver is **Half Turn Metric (HTM)**. HTM contains all faces $U$, $R$, $F$, $D$, $L$, $B$ and includes clockwise, counterclockwise, and double rotations. 

On a 2x2 cube, half of these rotations are simply the same as turning the opposite face in the same direction. For example, making a clockwise $R$ turn or making a clockwise $L$ turn yields the same final combination, with the only difference being the orientation of the physical cube. 

To solve this problem intuitively, this solver fixes the $U/R/F$ corner into a static position for the entire solve. By doing this, only $D$, $L$, $B$ moves are required. 

For the solve algorithm itself:
1. **Pre-computed Tree:** The solver contains a pre-computed search tree which holds all combinations **7 moves away from the solved state**. This tree is stored in `data.js`.
2. **Stage 1 Lookup:** At the first stage of the algorithm, the solver simply checks the pre-computed tree for the input cube. If found, it simply returns this solution.
3. **Stage 2 Expansion:** If the solution is not found in the first stage, the solver generates another tree with the root node being the input cube. 
4. **Tree Intersection:** Since God's Number for a 2x2 cube is **11**, the solver only has to search **4 moves away** from the input cube to guarantee finding a state from the pre-computed search tree. 

Now, the solver iterates through each depth from the newly generated tree until a combination is found in the final depth (depth 7) of the pre-computed tree. Since there are two trees and nodes are processed in order of depth, this type of search algorithm is a **bi-directional breadth-first search**.

---

## Future Improvements

There are many major improvements that can be made to this search algorithm:

* **Heuristic Search:** One of the biggest improvements that drastically reduces the memory usage is to remove the pre-computed search tree and use admissible heuristics to guide the search. These heuristics could also be pre-computed but would be much smaller in size than an entire search tree.
* **Uniform Scrambler:** Additionally, the cube scrambler could be improved to be uniformly random across all possible states by mathematically rearranging the corner pieces instead of simply taking some amount of random moves.

---

## About
