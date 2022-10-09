const partition = (nums: Array<number>, lb: number, ub: number): number => {
    const pivot = nums[lb];

    let i = lb;

    for(let j=i+1; j<=ub; j++){
        if(nums[j] <= pivot){
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    [nums[lb], nums[i]] = [nums[i], nums[lb]];

    return i;
};

const quickSort = (nums: Array<number>, lb: number, ub: number) => {
    if(lb < ub) {
        const pivot = partition(nums, lb, ub);

        quickSort(nums, lb, pivot - 1);
        quickSort(nums, pivot + 1, ub);
    }
}

const nums = [10, 7, 8, 9, 1, 5]
quickSort(nums, 0, nums.length - 1)
console.log(nums);