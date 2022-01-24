# Install axios
# Install dotenv
# Install styled-components
# Install react-router-dom 14.7

JSON.parse()
- parse 메소드는 string 객체를 json 객체로 변환시켜 줍니다.

JSON.stringify
- stringify 메소드는 json 객체를 String 객체로 변환시켜 줍니다.

### 14.5 데이터 연동하기
useEffect
- 컴포넌트가 처음 렌더링 되는 시점에 API를 요청하기 위해 쓰임.
주의할 점은 useEffect에 등록하는 함수에 async를 붙이면 안된다는 것이다.
useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문이다.
따라서 useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에
async 키워드가 붙은 또 다른 함수를 만들어서 사용해 주어야 합니다.