export interface Form {
	header: {
		title: string,
		createTime: string,
	}
	body: object,
	meta: {
		id: string,
		color: string,
		group: string,
		creatorId: string,
		editTimes?: string[],
	}
}

export interface FormThumbnailObject {
	title: string,
	createTime: string,
	id: string,
	color: string,
	group: string,
	creatorId: string,
}