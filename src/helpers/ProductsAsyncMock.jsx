const getProducts = () => {
    const productsList = [
        {
            id: 1,
            title: 'Microsoft Xbox Series X 1TB',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
            price: '$ 169.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_664180-MLA45041918051_032021-F.webp',
            stock: 5,
            category: 'consolas'        
        },
        {
            id: 2,
            title: 'Sony PlayStation 5 Standard 825GB',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
            price: '$ 159.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_739160-MLA44484414453_012021-F.webp',
            stock: 10,
            category: 'consolas'
        },
        {
            id: 3,
            title: 'Microsoft Xbox Series S 512GB',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
            price: '$ 99.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_933816-MLA45255172920_032021-F.webp',
            stock: 7,
            category: 'consolas'
        },
        {
            id: 4,
            title: 'FIFA 22 - PS5',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
            price: '$ 11.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_643022-MLA47679264469_092021-F.webp',
            stock: 30,
            category: 'videojuegos'
        },
        {
            id: 5,
            title: 'Gran Turismo 7 - PS5',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
            price: '$ 16.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_895469-MLA49352584208_032022-F.webp',
            stock: 30,
            category: 'videojuegos'
        },
        {
            id: 6,
            title: 'Uncharted: Legacy of Thieves Collection - PS5',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
            price: '$ 10.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_700846-MLA49016250536_022022-F.webp',
            stock: 30,
            category: 'videojuegos'
        },
        {
            id: 7,
            title: 'Joystick Sony DualSense PlayStation 5',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
            price: '$ 13.599',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_991801-MLA44330912940_122020-F.webp',
            stock: 10,
            category: 'accesorios'
        },
        {
            id: 8,
            title: 'Joystick Microsoft Xbox Wireless Series X|S',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
            price: '$ 15.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_749977-MLA44330907675_122020-F.webp',
            stock: 10,
            category: 'accesorios'
        },
        {
            id: 9,
            title: 'Silla Gamer Cooler Master Caliber R2 ergonómica',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
            price: '$ 79.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_983112-MLA48579032475_122021-F.webp',
            stock: 5,
            category: 'accesorios'
        }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList);
        }, 2000);
    });
}

export { 
    getProducts
};