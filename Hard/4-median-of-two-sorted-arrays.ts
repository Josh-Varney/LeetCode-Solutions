function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums3 = [...nums1, ...nums2];
    nums3.sort((a,b) => (a - b));
    let midpoint = Math.floor(nums3.length / 2);
    if (nums3.length % 2 == 0){
        midpoint = Math.floor(nums3.length / 2);
        return (nums3[midpoint - 1] + nums3[midpoint]) / 2;
    }
    return nums3[midpoint];
}