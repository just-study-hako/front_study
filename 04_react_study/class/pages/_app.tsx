import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component }: AppProps) {



  return (
    <div>
      <div>
        {/* 여기에 작성되는건 모든 페이지에 공통적으로 동작됨
        사실상 다른 페이지들을 여기로 가져와서 실행한다는 느낌. */}
        ======여기는 _app.js 컴포넌트 시작부분 입니다.======
      </div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles}/>
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
      <div>
        ======여기는 _app.js 컴포넌트 마지막 부분 입니다.======
      </div>
    </div>
  )
}
