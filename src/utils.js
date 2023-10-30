export function saveUserOptions(groupingOption, sortingOption) {
    localStorage.setItem('groupingOption', groupingOption);
    localStorage.setItem('sortingOption', sortingOption);
  }
  
  export function loadUserOptions() {
    const savedGroupingOption = localStorage.getItem('groupingOption') || 'status';
    const savedSortingOption = localStorage.getItem('sortingOption') || 'priority';
    return { groupingOption: savedGroupingOption, sortingOption: savedSortingOption };
  }
  