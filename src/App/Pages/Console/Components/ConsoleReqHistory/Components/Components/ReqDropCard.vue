<template>
  <ul class="console__req-drop-card req-drop-card">
    <li class="req-drop-card__item" >
      <span class="req-drop-card__text" @click="$emit('fulfilReq')">Выполнить</span>
    </li>
    <li class="req-drop-card__item" >
      <span class="req-drop-card__text" @click="$emit('copy')">Скопировать</span>
    </li>
    <li class="req-drop-card__item" >
      <span class="req-drop-card__text" @click="$emit('deleteReqItem')">Удалить</span>
    </li>
  </ul>
</template>