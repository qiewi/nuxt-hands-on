export default (min = 8, password) => {
	return (
		/[a-z]/.test(password) && // checks for a-z
		/[A-Z]/.test(password) && // checks for a-z
		/[0-9]/.test(password) && // checks for 0-9
		/\W|_/.test(password) && // checks for special char
		password.length >= min
	)
}

