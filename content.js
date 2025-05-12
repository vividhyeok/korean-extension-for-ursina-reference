const translationMap = {
    "camera": ["카메라", "장면을 렌더링할 뷰포인트"],
    "mouse": ["마우스", "마우스 위치, 클릭, 드래그 등의 상태 추적"],
    "window": ["창 설정", "해상도, 전체화면, 제목 등 윈도우 관련 설정"],
    "application": ["애플리케이션", "앱 실행 및 루프 관련 설정"],
    "scene": ["씬", "현재 씬에 존재하는 엔티티 관리"],
    "color": ["색상", "다양한 색상 값 정의"],
    "Mesh": ["메시", "3D 모델의 기본 데이터 구조"],
    "Shader": ["셰이더", "커스텀 셰이더 설정"],
    "Texture": ["텍스처", "이미지 텍스처 로딩 및 적용"],
    "Light": ["조명", "조명의 베이스 클래스"],
    "DirectionalLight": ["방향광", "태양광 같은 방향성 조명"],
    "PointLight": ["점광원", "한 점에서 퍼지는 전구 형태 조명"],
    "AmbientLight": ["환경광", "전체적으로 은은한 조명"],
    "SpotLight": ["스포트라이트", "원뿔 형태로 퍼지는 조명"],
    "Quad": ["사각형", "2D 직사각형 평면"],
    "Circle": ["원", "2D 원"],
    "Plane": ["평면", "XY 평면의 기본 모델"],
    "Grid": ["격자", "격자 형태의 평면"],
    "Cone": ["원뿔", "원뿔 모양"],
    "Cylinder": ["원기둥", "원기둥"],
    "Pipe": ["파이프", "중간이 빈 원기둥"],
    "Terrain": ["지형", "지형 모델 생성용"],

    // Basics
    "Ursina": ["유르시나", "Ursina 엔진 메인 클래스"],
    "Entity": ["엔티티", "게임 오브젝트의 기본 단위"],
    "Button": ["버튼", "클릭 가능한 UI 요소"],
    "Sprite": ["스프라이트", "2D 이미지 표시"],
    "Text": ["텍스트", "화면에 텍스트 표시"],
    "Audio": ["오디오", "소리 재생 및 제어"],

    // Modules
    "input_handler": ["입력 처리기", "키보드/마우스 입력 처리"],
    "mesh_importer": ["메시 임포터", "3D 모델 파일 불러오기"],
    "texture_importer": ["텍스처 임포터", "이미지 파일 불러오기"],
    "string_utilities": ["문자열 유틸", "문자열 처리 도구"],

    // Animation
    "Animation": ["애니메이션", "기본 애니메이션 시스템"],
    "FrameAnimation3d": ["3D 프레임 애니메이션", "3D 모델 키프레임 애니메이션"],
    "SpriteSheetAnimation": ["스프라이트시트 애니메이션", "2D 스프라이트 애니메이션"],
    "Animator": ["애니메이터", "애니메이션 제어 컴포넌트"],
    "TrailRenderer": ["트레일 렌더러", "이동 궤적 효과"],
    "curve": ["커브", "베지어 곡선 등 곡선 표현"],

    // Math
    "ursinamath": ["수학 라이브러리", "게임 개발용 수학 함수"],
    "Vec2": ["벡터2", "2차원 벡터"],
    "Vec3": ["벡터3", "3차원 벡터"],
    "Vec4": ["벡터4", "4차원 벡터"],
    "CubicBezier": ["3차 베지어", "베지어 곡선"],

    // Gameplay
    "ursinastuff": ["유르시나 유틸", "유용한 유틸리티 모음"],
    "Sequence": ["시퀀스", "연속 동작 정의"],
    "Func": ["함수", "callable 객체"],
    "Keys": ["키", "키 입력 상수"],

    // Shaders
    "unlit_shader": ["언릿 셰이더", "기본 라이팅 없는 셰이더"],
    "lit_with_shadows_shader": ["그림자 라이팅 셰이더", "그림자가 있는 기본 라이팅"],
    "matcap_shader": ["매트캡 셰이더", "재질 캡처 기반 셰이더"],
    "colored_lights_shader": ["컬러 라이트 셰이더", "컬러 조명 효과"],
    "fresnel_shader": ["프레넬 셰이더", "시야각 기반 효과"],

    // Collision
    "raycast": ["레이캐스트", "광선 충돌 감지"],
    "terraincast": ["지형캐스트", "지형과의 충돌 감지"],
    "boxcast": ["박스캐스트", "박스 형태 충돌 감지"],
    "HitInfo": ["충돌 정보", "충돌 감지 결과 정보"],
    "Collider": ["콜라이더", "충돌 영역 기본 클래스"],
    "BoxCollider": ["박스 콜라이더", "직육면체 형태의 충돌 영역"],
    "SphereCollider": ["구체 콜라이더", "구체 형태의 충돌 영역"],
    "MeshCollider": ["메시 콜라이더", "3D 메시 기반 충돌 영역"],

    // Editor
    "HotReloader": ["핫 리로더", "코드 실시간 갱신"],
    "GridEditor": ["그리드 에디터", "격자 기반 에디터"],
    "PixelEditor": ["픽셀 에디터", "픽셀 아트 에디터"],
    "ASCIIEditor": ["아스키 에디터", "문자 기반 에디터"],

    // Prefabs
    "Sky": ["하늘", "스카이박스 배경"],
    "EditorCamera": ["에디터 카메라", "씬 에디터용 자유 시점 카메라"],
    "Tilemap": ["타일맵", "2D 타일 기반 맵 시스템"],
    "FirstPersonController": ["1인칭 컨트롤러", "1인칭 시점 캐릭터 제어"],
    "PlatformerController2d": ["2D 플랫포머 컨트롤러", "2D 플랫폼 게임용 캐릭터 제어"],
    "Conversation": ["대화", "NPC 대화 시스템"],
    "Node": ["노드", "그래프/트리 구조의 기본 단위"],

    // UI Components
    "Draggable": ["드래그 가능", "마우스로 끌어다 놓을 수 있는 UI"],
    "Tooltip": ["툴팁", "마우스 오버시 표시되는 설명"],
    "Slider": ["슬라이더", "수치 조절 바"],
    "ThinSlider": ["얇은 슬라이더", "작은 크기의 수치 조절 바"],
    "TextField": ["텍스트 필드", "텍스트 입력 영역"],
    "Cursor": ["커서", "마우스 커서"],
    "InputField": ["입력 필드", "텍스트 입력 상자"],
    "ContentTypes": ["콘텐츠 타입", "입력 필드의 내용 유형"],
    "ButtonList": ["버튼 목록", "버튼들을 나열하는 컨테이너"],
    "ButtonGroup": ["버튼 그룹", "관련된 버튼들의 묶음"],
    "WindowPanel": ["윈도우 패널", "이동 가능한 창"],
    "Space": ["공간", "UI 요소 간 여백"],
    "FileBrowser": ["파일 브라우저", "파일 탐색기"],
    "FileButton": ["파일 버튼", "파일 선택 버튼"],
    "FileBrowserSave": ["파일 저장", "파일 저장 다이얼로그"],
    "DropdownMenu": ["드롭다운 메뉴", "펼쳐지는 메뉴"],
    "DropdownMenuButton": ["드롭다운 메뉴 버튼", "드롭다운 메뉴를 여는 버튼"],
    "RadialMenu": ["방사형 메뉴", "원형으로 펼쳐지는 메뉴"],
    "RadialMenuButton": ["방사형 메뉴 버튼", "방사형 메뉴의 버튼"],
    "HealthBar": ["체력바", "체력이나 진행도를 표시하는 바"],
    "ColorPicker": ["색상 선택기", "색상을 선택하는 도구"],

    // Scripts
    "grid_layout": ["그리드 레이아웃", "격자형 배치 시스템"],
    "duplicate": ["복제", "오브젝트 복사 유틸리티"],
    "SmoothFollow": ["부드러운 추적", "카메라/오브젝트 추적"],
    "Scrollable": ["스크롤 가능", "스크롤 기능 추가"],
    "NoclipMode": ["노클립 모드", "충돌 무시 이동"],
    "NoclipMode2d": ["2D 노클립 모드", "2D 충돌 무시 이동"],
    "build": ["빌드", "프로젝트 빌드 도구"],

    // Assets
    "models": ["모델", "3D 모델 에셋"],
    "textures": ["텍스처", "이미지 텍스처 에셋"],

    // Additional Shaders
    "projector_shader": ["프로젝터 셰이더", "텍스처 투영 효과"],
    "texture_blend_shader": ["텍스처 블렌드 셰이더", "여러 텍스처 혼합"],
    "instancing_shader": ["인스턴싱 셰이더", "다중 오브젝트 최적화"],
    "triplanar_shader": ["삼평면 셰이더", "3방향 텍스처 매핑"],
    "normals_shader": ["노멀 셰이더", "법선 벡터 시각화"],
    "transition_shader": ["전환 셰이더", "장면 전환 효과"],
    "fxaa": ["FXAA", "빠른 안티앨리어싱"],
    "ssao": ["SSAO", "주변광 차폐"],
    "camera_outline_shader": ["외곽선 셰이더", "오브젝트 외곽선"],
    "pixelation_shader": ["픽셀화 셰이더", "픽셀 아트 효과"],
    "camera_contrast": ["대비 효과", "화면 대비 조정"],
    "camera_vertical_blur": ["수직 블러", "수직 방향 흐림"],
    "camera_grayscale": ["흑백 효과", "흑백 변환"]
};
  
function addTooltipsInLinks() {
  const links = document.querySelectorAll('a');
  for (let a of links) {
    const key = a.textContent.trim();
    if (translationMap[key]) {
      const [korean, tooltip] = translationMap[key];
      a.textContent = korean;
      a.title = tooltip;
      a.style.borderBottom = '1px dotted gray';
      a.style.cursor = 'help';
    }
  }
}

function translateSidebarAndContent() {
  addTooltipsInLinks();

  const observer = new MutationObserver(() => {
    addTooltipsInLinks();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

if (window.location.href.includes('ursinaengine.org/api_reference')) {
  translateSidebarAndContent();
}
