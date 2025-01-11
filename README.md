# 사용법법
1. docker를 이용해서 파일 수정을 한다. 실시간으로 확인할 수 있다. 
    -> docker desktop을 열고, 
    -> docker compose pull 
    -> docker compose up 
    -> localhost:8080에서 확인 가능
2. 최종 수정본을 push하면 sappewha.github.io에서 수정 사항이 반영된 것을 확인할 수 있다. 

---------------------

# 페이지별 수정 방법
## 기본 설명 
    1. 텍스트는 md, yml 파일에서 수정한다. 
        => 텍스트만 수정한다면 그냥 깃에서 해당 파일 들어간 뒤에 연필모양을 누르면된다. 
    2. 레이아웃은 liquid 파일에서 수정한다. 
    3. 사진들은 모두 assets/img에 있다. 

## Home
    - 설명 : 메인 페이지지
    - 페이지 위치 : _pages/home.md
    - 페이지 양식 : _layout/about.liquid && _layout/default.liquid

## People
    - 설명 : 랩실 구성원에 대한 페이지
    - 페이지 위치 : _pages/people.md 
    - 페이지 양식 : _layout/profiles.liquid && _layout/page.liquid
    - 구성 요소
        - 교수님 설명 : about_JK.md
        - 교수님 약력 : _data/cv.yml && _layouts/cv.liquid
