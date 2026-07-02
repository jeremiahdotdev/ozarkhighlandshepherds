<template>
  <Page :image="currentItem?.images?.[0]" :imageAlt="currentItem?.name">
    <PageTitle :content="name" />
    <div class="flex flex-col gap-7">
      <PageText :content="description"/>
      <CarouselCard
        :currentIndex="currentIndex"
        :total="list.length"
        :previous-label="site.previous"
        :next-label="site.next"
        :view-item-label="site.viewItem"
        @previous="previous"
        @next="next"
        @select="selectItem"
      >
        <ul v-if="isPuppy(currentItem) && currentItem.price" class="grid w-full max-w-sm gap-3 px-2 text-sm sm:text-base">
          <li class="text-center text-2xl font-bold leading-tight text-foreground">{{ currentItem?.name }}</li>
          <li class="flex items-center justify-between gap-4 border-t border-border pt-3"><b>{{ site.litter.nickname }}</b><span>{{ currentItem.nickname }}</span></li>
          <li class="flex items-center justify-between gap-4"><b>{{ site.litter.sex }}</b><span>{{ currentItem.sex }}</span></li>
          <li v-if="!currentItem.isSold" class="flex items-center justify-between gap-4"><b>{{ site.litter.price }}</b><span>${{ currentItem.price }}</span></li>
          <li v-else class="flex items-center justify-between gap-4"><b>{{ site.litter.price }}</b><b class="rounded-full bg-status-danger-surface px-3 py-1 text-xs uppercase text-status-danger-foreground">{{ site.litter.sold }}</b></li>
        </ul>
        <div v-else class="flex w-full items-center justify-center px-2 text-center">
          <p class="text-2xl font-bold leading-tight text-foreground">{{ currentItem?.name }}</p>
        </div>
      </CarouselCard>
    </div>
  </Page>
</template>
    
<script lang="ts" setup>
import { type Breed } from "~/sanity/schema/documents/breedContent"
import { type Litter } from "~/sanity/schema/objects/litter"
import { isPuppy, type Puppy } from "~/sanity/schema/objects/puppy";

const props = defineProps<{
  litter?: Litter;
  breed?: Breed;
}>();
const { data: appContent } = await useAppContent()
const name = ref('');
const description = ref<string[]>([]);
const currentIndex = ref<number>(0);
const list = ref<any[]>([]);
const site = computed(() => appContent.value!.site)

if (!!props.breed) {
  name.value = props.breed.name
  description.value = props.breed.description ?? []
  list.value = [{name: props.breed.litters[0].name, images: [props.breed.images[0]]}, ...props.breed.litters.slice(1, props.breed.litters.length)]
} else if (!!props.litter) {
  name.value = props.litter.name
  description.value = props.litter.description ?? []
  list.value = [{name: props.litter.puppies?.[0]?.name ?? props.litter.name, images: [props.litter.images[0]]}, ...(props.litter.puppies ?? []).slice(1, (props.litter.puppies ?? []).length)]
}

const currentItem = computed<Puppy | Breed>(() => list.value[currentIndex.value]);

function previous() {
  currentIndex.value =
    (currentIndex.value - 1 + list.value.length) % list.value.length;
}

function next() {
  currentIndex.value =
    (currentIndex.value + 1) % list.value.length;
}

function selectItem(index: number) {
  currentIndex.value = index;
}
</script>
