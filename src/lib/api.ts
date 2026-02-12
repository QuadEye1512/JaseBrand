/**
 * API client for the Scam Report backend
 * Centralizes all backend API calls
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

/** Report shape from the API */
export interface ApiReport {
    reportId: string;
    date: string;
    location: string;
    amountRange: string;
    method: string;
    summary: string;
    evidence: string[];
    flags: string[];
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

/** Pagination metadata from the API */
export interface ApiPagination {
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

/** Standard success response */
interface ApiSuccessResponse<T> {
    success: true;
    message: string;
    data: T;
    pagination?: ApiPagination;
}

/** Standard error response */
interface ApiErrorResponse {
    success: false;
    error: {
        message: string;
        code: string;
        details?: Array<{ field: string; message: string }>;
    };
}

type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

/**
 * Create a new scam report
 */
export async function createReport(data: FormData): Promise<ApiSuccessResponse<ApiReport>> {
    const res = await fetch(`${API_BASE_URL}/reports`, {
        method: "POST",
        body: data,
    });

    const json: ApiResponse<ApiReport> = await res.json();

    if (!json.success) {
        throw new Error(json.error.message);
    }

    return json;
}

/**
 * Fetch reports with optional pagination and filters
 */
export async function fetchReports(params?: {
    page?: number;
    limit?: number;
    location?: string;
    flags?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}): Promise<ApiSuccessResponse<ApiReport[]>> {
    const searchParams = new URLSearchParams();

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                searchParams.set(key, String(value));
            }
        });
    }

    const url = `${API_BASE_URL}/reports${searchParams.toString() ? `?${searchParams}` : ""}`;
    const res = await fetch(url, { cache: "no-store" });
    const json: ApiResponse<ApiReport[]> = await res.json();

    if (!json.success) {
        throw new Error(json.error.message);
    }

    return json;
}

/**
 * Fetch report statistics
 */
export async function fetchStats(): Promise<ApiSuccessResponse<{
    totalReports: number;
    byFlag: Array<{ _id: string; count: number }>;
    byLocation: Array<{ _id: string; count: number }>;
}>> {
    const res = await fetch(`${API_BASE_URL}/reports/stats`, { cache: "no-store" });
    const json = await res.json();

    if (!json.success) {
        throw new Error(json.error.message);
    }

    return json;
}
