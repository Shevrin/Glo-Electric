const sendData = (data) => {
	return fetch('../../server.php', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		}
	}).then((res) => res.json())
}

export default sendData