# Nextjs + React + Typescript로 만드는 Todo List 📋

## 기술 스택

- create-next-app
- Next.js
- TypeScript
- Scss

### Redux, Recoil 경험해보기

두 가지 상태 관리 라이브러리 적용 여부를 결정하기 위해 
하나의 repository 안에서 packages를 나눔<br>
(yarn packages 사용해보려고 일부러 나눔)

```
// Root 디렉토리에서 
$ yarn install
// 실행
$ yarn workspace {각 package.json에 선언된 이름} dev
``` 


## 기능

- [X] (첫 페이지) 할 일 목록 표시
- [ ] (첫 페이지) 할 일 등록, 완료, 삭제
- [X] (첫 페이지) 스와이프를 통해서 전체/할 일/완료 목록 이동
- [ ] 수정은 수정 페이지에서 진행
- [ ] 새로고침 했을 때 기존 데이터 유지
