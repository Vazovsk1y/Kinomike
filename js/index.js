function loadGroups() {
    const rootElement = document.getElementById("root");
    const groups = Object.groupBy(data, ({ subType }) => subType);

    Object.entries(groups).forEach(([key, value]) => {
        const groupCard = document.createElement("div");
        groupCard.classList.add("group");
        groupCard.classList.add("flex-container");

        const groupTitle = document.createElement("button");
        groupTitle.classList.add("group-title");
        groupTitle.textContent = key;

        const groupSlider = document.createElement("div");

        groupSlider.classList.add("group-slider");
        groupSlider.classList.add("flex-container");

        const groupItems = document.createElement("div");
        groupItems.classList.add("group-items-container");
        groupItems.classList.add("flex-container");
        groupItems.classList.add("swiper-wrapper");

        value.forEach((item) => {
            item.randomId = crypto.randomUUID();
        });

        value.sort((a, b) => a.randomId.localeCompare(b.randomId));

        value.forEach((item) => {
            const groupItem = document.createElement("div");
            groupItem.classList.add("group-item");
            groupItem.classList.add("swiper-slide");
            groupItem.classList.add("flex-container");

            groupItem.innerHTML = `
    <div class="cover-container">
        <img alt="cover" src="${item.coverUrl + "300x450"}" >
        <div class="cover-info">
            <p style="font-size: 20px; font-weight: 600">${item.rating}</p>
            <p style="font-size: 16px">${item.year}, ${
                item.genre.split(",")[0]
            }</p>
            <p style="font-size: 16px">${item.country}</p>
            <p style="font-size: 16px">${item.duration}</p>
        </div>
    </div>
    <div style="margin-top: 10px">
        <button class="item-title">${item.ruTitle}</button>
        <button style="display: block; color: red; cursor: pointer; font-size: 14px; margin-top: 5px; background: transparent">Подписка</button>
    </div>`;

            groupItems.appendChild(groupItem);
        });

        groupSlider.innerHTML = `
            <div class="items-wrapper mySwiper swiper">
                ${groupItems.outerHTML}
                <div class="swiper-button-next nextBtn"></div>
                  <div class="swiper-button-prev prevBtn"></div>
            </div>
        `;

        groupCard.appendChild(groupTitle);
        groupCard.appendChild(groupSlider);
        rootElement.appendChild(groupCard);
    });
}

loadGroups();