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
          <li class="text-center font-display text-3xl font-normal leading-none text-foreground">{{ currentItem?.name }}</li>
          <li class="flex items-center justify-between gap-4 border-t border-border pt-3"><b>{{ site.litter.nickname }}</b><span>{{ currentItem.nickname }}</span></li>
          <li class="flex items-center justify-between gap-4"><b>{{ site.litter.sex }}</b><span>{{ currentItem.sex }}</span></li>
          <li v-if="!currentItem.isSold" class="flex items-center justify-between gap-4"><b>{{ site.litter.price }}</b><span>${{ currentItem.price }}</span></li>
          <li v-else class="flex items-center justify-between gap-4"><b>{{ site.litter.price }}</b><b class="rounded-full bg-status-danger-surface px-3 py-1 text-xs uppercase text-status-danger-foreground">{{ site.litter.sold }}</b></li>
        </ul>
        <div v-else class="flex w-full items-center justify-center px-2 text-center">
          <NuxtLink
            v-if="currentItemPath"
            :to="currentItemPath"
            class="font-display text-3xl font-normal leading-none text-foreground underline decoration-primary-border underline-offset-8 transition hover:text-primary hover:decoration-primary"
          >
            {{ currentItem?.name }}
          </NuxtLink>
          <p v-else class="font-display text-3xl font-normal leading-none text-foreground">{{ currentItem?.name }}</p>
        </div>
      </CarouselCard>
      <slot name="footer"></slot>
    </div>
  </Page>
</template>
    
<script lang="ts" setup>
import { type Breed } from "~/sanity/schema/documents/breedContent"
import { type Litter } from "~/sanity/schema/objects/litter"
import { isPuppy, type Puppy } from "~/sanity/schema/objects/puppy";
import { getLitterPath } from "~/utils/litterSlug";

const props = defineProps<{
  litter?: Litter;
  breed?: Breed;
}>();
const { data: appContent } = await useAppContent()
const name = ref('');
const description = ref<string[]>([]);
const currentIndex = ref<number>(0);
type CarouselItem = (Puppy | Litter | { name?: string; images?: string[] }) & { path?: string };
const list = ref<CarouselItem[]>([]);
const site = computed(() => appContent.value!.site)

if (!!props.breed) {
  name.value = props.breed.name
  description.value = props.breed.description ?? []
  const breedLitters = props.breed.litters ?? []
  const litters = breedLitters.filter((litter) => litter.puppies?.length)
  list.value = [
    { name: breedLitters[0]?.name ?? props.breed.name, images: props.breed.images?.slice(0, 1) },
    ...litters.map((litter) => ({
      ...litter,
      path: getLitterPath(litter.name ?? ""),
    })),
  ]
} else if (!!props.litter) {
  name.value = props.litter.name
  description.value = props.litter.description ?? []
  const puppies = props.litter.puppies ?? []
  const [overview, ...remainingPuppies] = puppies
  const hasOverview = puppies.length > 1 && overview?.price === 0
  const puppyItems = hasOverview ? remainingPuppies : puppies

  if (puppyItems.length <= 1) {
    list.value = puppyItems.length ? puppyItems : [{ name: props.litter.name, images: props.litter.images?.slice(0, 1) }]
  } else {
    const overviewImages = props.litter.images?.length ? props.litter.images : overview?.images
    list.value = [
      { ...(hasOverview ? overview : { name: props.litter.name }), images: overviewImages },
      ...puppyItems,
    ]
  }
}

const currentItem = computed<CarouselItem | undefined>(() => list.value[currentIndex.value]);
const currentItemPath = computed(() => currentItem.value?.path ?? "");

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
