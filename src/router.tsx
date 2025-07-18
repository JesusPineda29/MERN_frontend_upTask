import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { DashboardView } from "@/views/DashboardView";
import { CreateprojectView } from "@/views/projects/CreateprojectView";
import { EditprojectView } from "@/views/projects/EditprojectView";
import { ProjectDetailsView } from "./views/projects/ProjectDetailsView";
import { AuthLayout } from "./layouts/AuthLayout";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import ConfirmAccountView from "./views/auth/ConfirmAccountView";
import RequestNewCodeView from "./views/auth/RequestNewCodeView";
import { NewPasswordView } from "./views/auth/NewPasswordView";
import ForgotPasswordView from "./views/auth/ForgotPasswordView";



export default function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route element={<AppLayout />}>
                    <Route path='/' element={<DashboardView />} index />
                    <Route path='/projects/create' element={<CreateprojectView />} />
                    <Route path='/projects/:projectId' element={<ProjectDetailsView />} />
                    <Route path='/projects/:projectId/edit' element={<EditprojectView />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<LoginView />} />
                    <Route path='/auth/register' element={<RegisterView />} />
                    <Route path='/auth/confirm-account' element={<ConfirmAccountView />} />
                    <Route path='/auth/request-code' element={<RequestNewCodeView />} />
                    <Route path='/auth/forgot-password' element={<ForgotPasswordView />} />
                    <Route path='/auth/new-password' element={<NewPasswordView />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}