// src/hooks/useGame.js

import { useEffect, useRef } from 'react';
import { useGameContext } from '../hooks/useGameContext';
import { DIRECTIONS, GRID_SIZE, INITIAL_SPEED } from '../constants';

export default function useGame() {
  const { gameState, setGameState } = useGameContext();

  // This ref tracks the direction the snake is actually moving to
  // prevent it from reversing into itself during fast key presses.
  const lastProcessedDirection = useRef(gameState.direction);

  // Handle keyboard input
  useEffect(() => {
    function handleKeyDown(e) {
      const newDir = DIRECTIONS[e.key];
      if (!newDir) return;

      // Reverse prevention; check against ref, not state
      const isOpposite =
        newDir.x === -lastProcessedDirection.current.x &&
        newDir.y === -lastProcessedDirection.current.y;

      if (!isOpposite) {
        setGameState((prev) => ({ ...prev, direction: newDir }));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setGameState]);

  // A snake is fundamentally a queue of coordinates
  // Movement = add new head, remove tail
  // Growth = add new head, don’t remove tail

  // Handle snake movement
  useEffect(() => {
    const interval = setInterval(() => {
      setGameState((prev) => {
        if (prev.isGameOver) return prev;

        // Update the ref so the next keypress knows where we are headed
        lastProcessedDirection.current = prev.direction;

        const head = prev.snake[0];
        const newHead = {
          x: head.x + prev.direction.x,
          y: head.y + prev.direction.y,
        };

        const hitSelf = prev.snake.some(
          (seg) => seg.x === newHead.x && seg.y === newHead.y
        );

        if (hitSelf) {
          return {
            ...prev,
            isGameOver: true,
          };
        }

        const hitWall =
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE;

        if (hitWall) {
          return {
            ...prev,
            isGameOver: true,
          };
        }

        const ateFood = newHead.x === prev.food.x && newHead.y === prev.food.y;

        const newSnake = ateFood
          ? [newHead, ...prev.snake] // grow, keep tail end
          : [newHead, ...prev.snake.slice(0, -1)]; // default, lose tail end

        // Generate new food location if snake ate
        const newFood = ateFood
          ? {
              x: Math.floor(Math.random() * GRID_SIZE),
              y: Math.floor(Math.random() * GRID_SIZE),
            }
          : prev.food;

        return {
          ...prev,
          snake: newSnake,
          food: newFood,
          score: ateFood ? prev.score + 1 : prev.score,
        };
      });
    }, INITIAL_SPEED);

    return () => clearInterval(interval);
  }, [setGameState]);

  return { gameState, setGameState };
}
