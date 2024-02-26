import { API_HOST } from '../../common/api.js';

/* 카테고리 데이터를 가져와서 메뉴를 렌더링하는 함수 */
async function renderCategory() {

    try {
        // API에서 카테고리 데이터 가져오기
        const response = await fetch(`${API_HOST}/api/category`);
        const res = await response.json();
        console.log(res.data)

        if (!response.ok) {
            throw new Error('카테고리 데이터를 가져올 수 없습니다.');
        } else {
        console.log("성공이다!!")
        }

        const category = res.data
        const categoryListElement = document.getElementById('categoryList');

        
        // 데이터를 기반으로 메뉴바 생성
        category.forEach(category => {
            // 메뉴 요소 생성
            const categoryItem = document.createElement('li');
            categoryItem.classList.add('menu');
            categoryItem.innerHTML = `
                <a href="#">${category.name}</a>
            `;

            // 상품 리스트에 상품 추가
            categoryListElement.appendChild(categoryItem);
        });


    } catch (error) {
        console.error('카테고리를  렌더링하는 중 오류가 발생했습니다:', error);
    }
}

    // 페이지가 로드되면 상품 리스트 렌더링
    window.addEventListener('load', () => {
        renderCategory();
    }); 