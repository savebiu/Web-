document.addEventListener("DOMContentLoaded", function () {
    const pokemonContainer = document.getElementById("pokemonContainer");
    const searchInput = document.getElementById("search");
    const pokemonDetails = document.getElementById("pokemonDetails");
    const closeDetailsButton = document.getElementById("closeDetails"); // 获取关闭按钮

    // 示例宝可梦数据
    const pokemons = [
        { id: 1, name: "妙蛙种子", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" },
        { id: 4, name: "小火龙", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" },
        { id: 7, name: "杰尼龟", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" },
        { id: 25, name: "皮卡丘", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" },
        { id: 39, name: "胖丁", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png" },
        { id: 52, name: "喵喵", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png" },
        { id: 133, name: "伊布", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png" },
    ];

    // 渲染宝可梦卡片
    function renderPokemons(data) {
        pokemonContainer.innerHTML = ""; // 清空容器内容
        const allCardsContainer = document.createElement("div"); // 创建一个容器来放所有卡片

        data.forEach(function (pokemon) {
            const card = document.createElement("div");
            card.classList.add("pokemon-card");
            card.innerHTML = `
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
                <p>#${pokemon.id.toString().padStart(3, '0')}</p>
            `;

            // 为卡片添加点击事件
            card.addEventListener("click", function () {
                // 更新弹窗的内容
                document.getElementById("pokemonName").textContent = pokemon.name;
                document.getElementById("pokemonImage").src = pokemon.image;
                document.getElementById("pokemonDescription").textContent = `这里是${pokemon.name}的详细描述...`;

                // 显示弹窗
                document.getElementById("pokemonDetails").style.display = "block";
            });

            allCardsContainer.appendChild(card); // 将卡片添加到父容器中
        });

        pokemonContainer.appendChild(allCardsContainer); // 将包含所有卡片的容器添加到页面上
    }

    // 搜索功能
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredPokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query)
        );
        renderPokemons(filteredPokemons);
    });

    // 关闭宝可梦详细信息
    closeDetailsButton.addEventListener("click", () => {
        pokemonDetails.style.display = "none"; // 隐藏详细信息容器
    });

    // 初始渲染
    renderPokemons(pokemons);
});
