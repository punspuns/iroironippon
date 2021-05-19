document.addEventListener('DOMContentLoaded', () => {
	// Creating waypoint
	let waypoint = new Waypoint({
	  element: document.querySelector('#yokai'),
	  handler: function() {
			anime({
				targets: '#yokai',
				easing: 'easeOutExpo',
				translateX: [100, 0],
				opacity: [0, 1],
				delay: 300,
			})

			this.destroy();
	  },
		context: document.querySelector('.text-content'),
		offset: '100%',
	})
})