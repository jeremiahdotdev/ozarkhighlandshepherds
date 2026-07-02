import type { Puppy as SanityPuppy } from "~/sanity.types";
import type { StripSanityMeta } from "./sanity";


export type Puppy = StripSanityMeta<SanityPuppy>
export function isPuppy(value: any): value is Puppy {
    if  (typeof value !== 'object') return false;
    if  (!Object.hasOwn(value, 'name')) return false;
    if  (!Object.hasOwn(value, 'price')) return false;
    if  (!Object.hasOwn(value, 'images')) return false;
    return true
}
