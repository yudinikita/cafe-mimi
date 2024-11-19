<script context="module" lang="ts">
  export interface GameItem {
    x: number;
    y: number;
    type: 'good' | 'bad';
    image: string;
  }
</script>

<script lang="ts">
  import { writable } from 'svelte/store';
  import { mouseCoords, mouseCoordsSpring } from '../scrollPos';
  import Button from '../button.svelte';
  import { onDestroy } from 'svelte';
  import GameItem1 from '$lib/assets/images/game-item-1.png';
  import GameItem2 from '$lib/assets/images/game-item-2.png';
  import GameItem3 from '$lib/assets/images/game-item-3.png';
  import GameItem4 from '$lib/assets/images/game-item-4.png';

  const maxScore = 10;

  let score = writable(0);
  let gameStarted = false;
  let gameOver = false;
  let gameFinish = false;
  let gameLoop: ReturnType<typeof setTimeout>;
  let items: GameItem[] = [];
  let itemInterval: ReturnType<typeof setTimeout>;
  let playerX = 0;

  $: $mouseCoords, (playerX = $mouseCoords.x * 100);

  const onMouseMove = (e: MouseEvent) => {
    // get normalized mouse coords
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    mouseCoords.set({ x, y });
    mouseCoordsSpring.set({ x, y });
  };

  const createItem = (): GameItem => {
    const isGood = Math.random() > 0.4;
    return {
      x: Math.random() * 100,
      y: 0,
      type: isGood ? 'good' : 'bad',
      image: isGood ? getRandomItemImage() : GameItem3,
    };
  };

  const getRandomItemImage = () => {
    const items = [GameItem1, GameItem2, GameItem4];
    return items[Math.floor(Math.random() * items.length)];
  };

  const updateItems = () => {
    items = items.filter((item) => {
      item.y += 1;
      if (item.y >= 100) {
        return false;
      }
      if (Math.abs(item.x - playerX) < 10 && item.y > 60) {
        if (item.type === 'bad') {
          score.update((n) => n - 1);
          if ($score <= 0) {
            gameOver = true;
            clearInterval(gameLoop);
            clearInterval(itemInterval);
          }
        } else {
          score.update((n) => n + 1);
          if ($score >= maxScore) {
            gameFinish = true;
            clearInterval(gameLoop);
            clearInterval(itemInterval);
          }
        }
        return false;
      }
      return true;
    });
  };

  const startGame = () => {
    gameStarted = true;
    gameOver = false;
    gameFinish = false;
    score.set(0);
    items = [];
    gameLoop = setInterval(updateItems, 50);
    itemInterval = setInterval(() => {
      items = [...items, createItem()];
    }, 1000);
  };

  onDestroy(() => {
    clearInterval(gameLoop);
    clearInterval(itemInterval);
  });
</script>

<svelte:window on:mousemove={onMouseMove} />

<div class="game">
  {#if !gameStarted}
    <div class="game-start">
      <enhanced:img src="$lib/assets/images/game-player.png" alt="" class="player-image" />
      <Button type="primary" class="game-button" on:click={startGame}>GO</Button>
    </div>
  {:else if gameOver && gameStarted}
    <div class="game-over">
      <enhanced:img src="$lib/assets/images/game-player.png" alt="" class="player-image" />
      <p class="heading">Собрано: {$score} / {maxScore}</p>
      <Button type="primary" class="game-button" on:click={startGame}>Начать заново</Button>
    </div>
  {:else if gameFinish && gameStarted}
    <div class="game-finish">
      <enhanced:img src="$lib/assets/images/game-player.png" alt="" class="player-image" />
      <p class="heading">Поздравляем!</p>
      <Button type="primary" class="game-button" on:click={startGame}>Начать заново</Button>
    </div>
  {:else if gameStarted && !gameOver}
    <div class="game-wrapper">
      <div class="player" style={`--mouse-x: ${$mouseCoordsSpring.x * 100}%;`}>
        <enhanced:img src="$lib/assets/images/game-player.png" alt="" class="player-image" />
      </div>
      <div class="items">
        {#each items as item (item)}
          <img src={item.image} alt="" class={`item ${item.type}`} style={`left: ${item.x}%; top: ${item.y}%;`} />
        {/each}
      </div>
      <div class="score">
        Собрано: {$score} / {maxScore}
      </div>
    </div>
  {/if}
</div>

<style>
  .game {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .game-wrapper {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0 var(--space-lg);
    width: 100%;
    max-width: 1000px;
    height: 100%;
    min-height: 100vh;
  }
  .player {
    position: absolute;
    bottom: 10%;
    left: var(--mouse-x, 0px);
    transform: translateX(-50%);
    transition: left 0.2s ease-out;
  }
  .player-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
  }
  .game-over {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .game-finish {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .game :global(.game-button) {
    margin: var(--space-base) auto;
    width: 100%;
    max-width: 600px;
  }
  .score {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
  }
  .items {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .item {
    position: absolute;
    transition: all 0.2s ease-in-out;
    border-radius: 50%;
    width: 128px;
    height: 128px;
  }
</style>
