import api from "@/lib/axios";
import { dashboardProjectSchema, editProjectSchema, Project, ProjectFormData, projectSchema } from "../types";
import { isAxiosError } from "axios";

export async function createProject(formData: ProjectFormData) {
    try {
        const {data} = await api.post('/projects', formData)
        return data; //Este data es la respuesta del back que seria proyecto creado correctamente
        
    } catch (error) {
        if (isAxiosError(error) && error.response) { 
            throw new Error(error.response.data.error);
        }
        
    }
    
}
export async function getProject() {
    
    try {
        const {data} = await api('/projects'
        //     {
        //     headers:{
        //         Authorization: `Bearer ${token}`
        //     }
        // }
    ) //Forma de pasar el jwt token al backend
        const response = dashboardProjectSchema.safeParse(data)
        
        if (response.success) {
            return response.data
        }

    } catch (error) {
        if (isAxiosError(error) && error.response) { 
            throw new Error(error.response.data.error);
        }
        
    }
    
}
export async function getProjectById(id: Project['_id']) {
    try {
        const {data} = await api(`/projects/${id}`)
        const response = editProjectSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) { 
            throw new Error(error.response.data.error);
        }
        
    }
    
}
export async function getFullProject(id: Project['_id']) {
    try {
        const {data} = await api(`/projects/${id}`)
        const response = projectSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) { 
            throw new Error(error.response.data.error);
        }
        
    }
    
}
type ProjectAPIType = {
    formData: ProjectFormData,
    projectId: Project['_id']
}
export async function updateProject({formData, projectId}: ProjectAPIType) {
    try {
        const {data} = await api.put<string>(`/projects/${projectId}`, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) { 
            throw new Error(error.response.data.error);
        }
        
    }
    
}
export async function deleteProject(id: Project['_id']) {
    try {
        const {data} = await api.delete<string>(`/projects/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) { 
            throw new Error(error.response.data.error);
        }
        
    }
    
}