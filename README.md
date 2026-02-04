# The Julge (더 줄게)

> **조건 기반 일자리 매칭 서비스**
> 사용자가 원하는 조건으로 일자리를 검색·지원하고, 고용주가 이를 승인하는 프로세스를 담은 매칭 플랫폼입니다.

---

## 🔗 프로젝트 링크

- **배포 사이트**: [배포 완료 후 수정 예정 ]
- **디자인 시안 (Figma)**: [Figma Link](http://figma.com/design/UJfAmRiZuFlVlb22nHeixd/-BBB-The-julge?node-id=477-51558&t=HEIRGIGdr5WvHVMo-0)
- **API 명세서 (Swagger)**: [Swagger Link](https://bootcamp-api.codeit.kr/docs/the-julge)
- **프로젝트 가이드**: [Notion Link](https://www.notion.so/codeit/_-The-julge-1fc6fd228e8d8137ab6bea3087de78d5)

---

## 📢 프로젝트 소개

**The Julge**는 단순한 구인구직을 넘어, 데이터 기반의 스마트한 매칭 경험을 제공합니다.

- **스마트 매칭**: 시급 인상률, 위치, 시간 등 사용자 맞춤형 필터링 기능을 통해 최적의 일자리를 추천합니다.
- **직관적인 프로세스**: 지원부터 승인/거절까지 이어지는 명확한 상태 관리 시스템을 구현했습니다.
- **현대적인 UI/UX**: 모달, 주소 검색, 일정 선택 등 복잡한 요소를 컴포넌트화하여 사용자 편의성을 높였습니다.

---

## 🧑‍💻 기술 스택

| 구분              | 기술                                                                                                                                                                                                                                                                                                        |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Library**       | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)                                                                                            |
| **Styling**       | ![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)                                                                                                                                                                        |
| **Data Fetching** | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)                                                                                                                                                                                                            |
| **Build Tool**    | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white)                                                                                                                                                                                                               |
| **Deployment**    | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white)                                                                                                                                                                                                         |
| **Collaboration** | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) |

---

## 👥 R&R (팀원 역할)

| 이름       | 담당 역할 및 주요 구현 기능                                                              |
| :--------- | :--------------------------------------------------------------------------------------- |
| **박지현** | **공통 컴포넌트 & 랜딩 페이지** (디자인 시스템 구축, 공용 UI 요소 개발, 로그인/회원가입) |
| **송민하** | **알바님(구직자) 페이지** (프로필 등록/관리, 신청 내역 및 알림 시스템, 공통:DropDwon)    |
| **이충만** | **공고 리스트 페이지** (상세 필터링, 정렬 시스템, 공통: footer)                          |
| **김용현** | **사장님(구인자) 페이지** (가게 정보 등록/편집, 공고 관리 및 지원자 승인)                |

---

## 주요 기능

### 1. 사장님(구인자) 기능

- **가게 관리**: 내 가게 등록(서울시 25개구 지역 제한), 정보 편집 및 상세 조회.
- **공고 및 매칭**: 공고 등록/편집 및 지원자 명단 확인, 개별 지원에 대한 승인 및 거절 처리.

### 2. 알바님(구직자) 기능

- **프로필 관리**: 내 프로필 등록 및 편집, 페이지네이션을 통한 신청 내역 확인.
- **구직 활동**: 공고 상세 페이지 내 신청/취소 기능, 상태별 알림 확인 시스템.

### 3. 공통 서비스

- **공고 리스트**: 마감 임박순, 시급순 등 다양한 정렬 및 위치/금액 기반 상세 필터링 제공.
- **사용자 경험**: 로컬 스토리지를 활용한 '최근 본 공고(최대 6개)' 기능, 반응형 웹 디자인 적용.
- **유효성 검사**: 이메일 형식 및 비밀번호 길이(8자 이상) 실시간 검증 및 커스텀 에러 피드백.

---

## ⚙️ 실행 방법

프로젝트를 로컬 환경에서 실행하려면 다음 명령어를 입력하세요.

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev

# 빌드 하기
npm run build
```
