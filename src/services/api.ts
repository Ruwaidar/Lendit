// API Service - Placeholder for future backend integration
import {API_BASE_URL} from '../utils/constants';

// This file will contain API calls once the backend is set up
// For now, it serves as a placeholder structure

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Placeholder methods - to be implemented when backend is ready
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    // TODO: Implement GET request
    throw new Error('Backend not implemented yet');
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    // TODO: Implement POST request
    throw new Error('Backend not implemented yet');
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    // TODO: Implement PUT request
    throw new Error('Backend not implemented yet');
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    // TODO: Implement DELETE request
    throw new Error('Backend not implemented yet');
  }
}

export default new ApiService();

