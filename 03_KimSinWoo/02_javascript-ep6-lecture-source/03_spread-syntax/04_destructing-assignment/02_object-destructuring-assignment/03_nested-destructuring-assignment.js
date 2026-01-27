// 중첩 구조 분해 할당
const product = {
    size: {
        width: 10,
        height: 30
    },
    items: ['doll', 'robot']
};

const {
    size: {width,height},
    items: [item1, item2]
} = product;

console.log(width, height, item1, item2);