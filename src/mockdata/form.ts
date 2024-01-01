import type { Form, FormThumbnailObject } from '../types/form';

export const fulldemoform: Form = {
	header: {
		title: 'Tester',
		createTime: '2018-10-10',
	},
	body: {},
	meta: {
		id: "123",
		color: "#be185d",
		group: "test",
		creatorId: "123",
		editTimes: ["2018-10-10", "2018-10-11"],
	}
}

const smallform1: FormThumbnailObject = {
	id: "1",
	title: "Tester",
	color: "#be185d",
	group: "test",
	creatorId: "123",
	createTime: "2018-10-10",
}

const smallform2: FormThumbnailObject = {
	id: "2",
	title: "Tester2",
	color: "#e879f9",
	group: "test",
	creatorId: "123",
	createTime: "2018-10-10",
}

const smallform3: FormThumbnailObject = {
	id: "3",
	title: "Tester3",
	color: "#059669",
	group: "test",
	creatorId: "123",
	createTime: "2018-10-10",
}

export const smallformlist: FormThumbnailObject[] = [
	smallform1,
	smallform2,
	smallform3,
]