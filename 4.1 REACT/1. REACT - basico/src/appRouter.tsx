import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompanySelector } from "./components/selector/selector";
import { LoginPage } from "./components/login";
import { GetUserList } from "./components/list/list";
import { DetailPage } from "./components/details/details";
import { ProfileProvider } from "./core/providers/authentication";
import { ResetSelectProvider } from "./core/providers/resetlocalstorage";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ProfileProvider components={{ Login: <LoginPage /> }}>
          <ResetSelectProvider>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/selector" element={<CompanySelector />} />
              <Route path="/list" element={<GetUserList />} />
              <Route path="/details/:id" element={<DetailPage />} />
              <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
          </ResetSelectProvider>
        </ProfileProvider>
      </BrowserRouter>
    </>
  );
};
