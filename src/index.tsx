import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./style/__index.scss"
import { Main } from "./pages"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
)

reportWebVitals()
// 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
// ssh -i "ngbthg-connect.pem" ec2-user@ec2-13-115-253-231.ap-northeast-1.compute.amazonaws.com
