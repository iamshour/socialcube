//#region Import
import { useState } from "react"
import toast from "react-hot-toast"
//#endregion

const apiOptions: RequestInit = {
	headers: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
	},
	method: "POST",
}

interface UsePostDataReturnType<T> {
	loading: boolean
	postData: (url: string, data: T) => Promise<void>
}

/**
 * Custom hook to post data to an API endpoint.
 *
 * @template T - The type of data being posted.
 * @returns - Returns the postData function and the loading state.
 */
function usePostData<T>(): UsePostDataReturnType<T> {
	const [loading, setLoading] = useState<boolean>(false)

	const postData = async (url: string, data: T) => {
		setLoading(true)

		const response = await fetch(url, { ...apiOptions, body: JSON.stringify(data) })

		const result = await response.json()

		if (!response.ok) {
			setLoading(false)

			toast.error(result?.message || "Something went wrong")

			return
		}

		setLoading(false)
		toast.success(result.message)

		return
	}

	return { loading, postData }
}

export default usePostData
