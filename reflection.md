# Project Reflection

## Problem 1

- By far one of the hardest problems I had to overcome were variables to keep track of where the tetris blocks were in the grid. Since I used 2D arrays to create my various different block shapes I had to increase the x and y coordinates while I was parsing though an array however, because I waas actively changing these values the actual location of each tetris block was incorrect. To combat this problem I stored the inital values of the x and y coordinates in different variables so that once my code was done going though a 2D array the intial x and y coordinates were preserved, therfore, not chnaging the actual position of the tetris block. This was challenging becasue I had to figure out which stage in my nested for loop needed to be modified.

## Problem 2

- Another part of my code that I was baffled by was understanding how to properly stack the blocks on top of each other. As a result of creating each tetris block with a 2D array I ran into isues because the code that allowed for the stacking of blocks were confusing 0s and 1s. The way I created each 2D array was to add a zero for every blank space in a block and a 1 for every colored space. So a four peice block for example was[[1, 1, 1, 1]] with no 0s because there were no balnk spaces. However, for more complex blocks the 2D arrays included 0s. These 0s were read as 1s in my code and in the end I could not figure out a proper way of stacking blocks for my game. Although the code functions if the blocks land edge to edge it does not function when the blocks are not edge to edge.

## Completion

- I was able to complete everything in my needs to have list, and I was able to achieve 3 parts of my nice to have list. Which include: Speed up falling for the blocks, Next shape screen, and a start screen. I am pretty proud of my self for being able to create a next shape screen and also for being able to create a rotation system for all the tetris blocks.
