// import toast from "react-hot-toast"

import toast from "react-hot-toast"

const apiOptions: RequestInit = {
	headers: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
	},
	method: "POST",
}

/**
 * Response type for all API requests.
 */
// interface ApiResponse {
// 	message: string
// 	status: string
// }

/**
 * Posts data to the specified API endpoint.
 *
 * @template T - The type of data being posted.
 * @param {string} url - The endpoint URL to which data should be posted.
 * @param {T} data - The data to be sent in the request body.
 * @throws {Error} - Throws an error if the request fails.
 */
export default async function postData<T>(url: string, data: T) {
	const options: RequestInit = {
		...apiOptions,
		body: JSON.stringify(data),
	}

	const response = await fetch(url, options)

	const result = await response.json()

	if (!response.ok) {
		return toast.error(result.message || "Something went wrong")
	}

	return toast.success(result.message)
}
