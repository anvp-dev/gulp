const tabs = () => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabs__button')) {
            const dataTabValue = e.target.dataset.tab; 
            const currentTabsBody = e.target.closest('.tabs__buttons').nextElementSibling;
            const tabContentsList = Array.from(currentTabsBody.children);
            const activeTabContent = tabContentsList[dataTabValue - 1];

            tabContentsList.forEach(item => {
                item.classList.remove('is-active')             
            })

            activeTabContent.classList.add('is-active')
        }
    })
}

export default tabs;