'use strict';

angular.module('whenDoWeGetPizzaApp').controller('MainCtrl', function($scope, $http) {
	$scope.pieLeft = 57;
	$scope.points = 44;
	$scope.carouselInterval = 1000;
	$scope.noWrapSlides = false;
	$scope.noPause = true;
	$scope.slides = [
		{
			text: 'A pizza pie has no importance whatever to society. It is only important to the individual. - Vladimir Nabokov',
			image: 'http://animatedpizzagifs.com/images/bubblin-pizza-time-lapse.gif',
			id: 0
		},
		{
			text: 'The true pizza pie is but a shadow of the divine perfection. - Michelangelo',
			image: 'http://animatedpizzagifs.com/images/tumblr_ljc6d3dERQ1qij0xno1_500.gif',
			id: 1
		},
		{
			text: 'If pizza is to nourish the roots of our culture, society must set the pizza maker free to follow his vision wherever it takes him. - John F. Kennedy',
			image: 'http://animatedpizzagifs.com/images/pulsating-space-pizza.gif',
			id: 2
		},
		{
			text: 'When I think of pizza I think of beauty. Beauty is the mystery of life. It is not in the eye it is in the mind. In our minds there is awareness of perfection. - Agnes Martin',
			image: 'http://animatedpizzagifs.com/images/tumblr_lys95bU6yh1r68q57o1_500.gif',
			id: 3
		},
		{
			text: 'A pizza maker is not paid for his labor but for his vision. - James Whistler',
			image: 'http://animatedpizzagifs.com/images/tumblr_lz8m7cFB5t1r83xfro1_500.gif',
			id: 4
		},
		{
			text: 'All pizza is a struggle to be, in a particular sort of way, virtuous. - Iris Murdoch',
			image: 'http://animatedpizzagifs.com/images/Trippy%20Cat%20Eating%20Pizza%20%20animated%20Gif%20source%20tenpointstogifindor%20on%20tumblr%20Resized.gif',
			id: 5
		},
		{
			text: 'Pizza is not a thing; it is a way. - Elbert Hubbard',
			image: 'http://animatedpizzagifs.com/images/Turntable_pizza_animation.gif',
			id: 6
		},
		{
			text: 'Treat a pizza like a prince. Let it speak to you first. - Arthur Schopenhauer',
			image: 'http://animatedpizzagifs.com/images/tumblr_m94djyGEvw1qf6bk2.gif',
			id: 7
		},
		{
			text: 'The pizza maker is a receptacle for emotions that come from all over the place- from the sky, from the earth, from a scrap of paper, from a passing shape, from a spider\'s web. - Pablo Picasso',
			image: 'http://animatedpizzagifs.com/images/infipizza.gif',
			id: 8
		},
		{
			text: 'Pizza is the most intense mode of individualism that the world has known. - Oscar Wilde',
			image: 'http://animatedpizzagifs.com/images/heart-pizza.gif',
			id: 9
		},
		{
			text: 'Pizza enables us to find ourselves and lose ourselves at the same time. - Thomas Merton',
			image: 'http://animatedpizzagifs.com/images/tumblr_lazazw2kuI1qcr7fqo1_400.gif',
			id: 10
		},
		{
			text: 'I do not want pizza for a few any more than education for a few, or freedom for a few. - William Morris',
			image: 'http://animatedpizzagifs.com/images/tumblr_la4jhu3BXZ1qzgjfco1_500.gif',
			id: 11
		},
		{
			text: 'Good pizza is pizza that allows you to enter it from a variety of angles and to emerge with a variety of views. - Mary Schmich',
			image: 'http://animatedpizzagifs.com/images/tumblr_lzphbt6hIo1qcr7fqo1_500.gif',
			id: 12
		},
		{
			text: 'Without tradition, pizza is a flock of sheep without a shepherd. Without innovation, it is a corpse. - Winston Churchill',
			image: 'http://animatedpizzagifs.com/images/jOMmTk1321859920.gif',
			id: 13
		},
		{
			text: 'Pizza is not a handicraft, it is the transmission of feeling the pizza maker has experienced. - Leo Tolstoy',
			image: 'http://animatedpizzagifs.com/images/tumblr_ls83ynw7RD1qcr7fqo1_r1_500.gif',
			id: 14
		},
		{
			text: 'Pizza! Who comprehends her? With whom can one consult concerning this great goddess? - Ludwig van Beethoven',
			image: 'http://animatedpizzagifs.com/images/tumblr_lfw91hVUR41qghbeyo1_500.gif',
			id: 15
		},
		{
			text: 'The aim of pizza is to represent not the outward appearance of things, but their inward significance. - Aristotle',
			image: 'http://animatedpizzagifs.com/images/tumblr_lfzzc9vAA81qgj5j7o1_400.gif',
			id: 16
		},
		{
			text: 'Creativity is allowing yourself to make mistakes. Pizza is knowing which ones to keep. - Scott Adams',
			image: 'http://animatedpizzagifs.com/images/tumblr_les8e6XsVf1qa1xnko1_500.gif',
			id: 17
		},
		{
			text: 'The essence of all beautiful pizza, all great pizza, is gratitude. - Friedrich Nietzsche',
			image: 'http://animatedpizzagifs.com/images/tumblr_ll7binOhKq1qcnihto1_500.gif',
			id: 18
		},
		{
			text: 'A pizza pie is above all an adventure of the mind. - Eugene Ionesco',
			image: 'http://animatedpizzagifs.com/images/tumblr_lnvt6e6ZfC1qdr2hg.gif',
			id: 19
		},
		{
			text: 'Pizza is the daughter of freedom. - Friedrich Schiller',
			image: 'http://animatedpizzagifs.com/images/tumblr_llbclffFeK1qzgjfco1_500.gif',
			id: 20
		},
		{
			text: 'Pizza, in itself, is an attempt to bring order out of chaos. - Stephen Sondheim',
			image: 'http://animatedpizzagifs.com/images/tumblr_luhno6lDLa1qbezi6o1_400.gif',
			id: 21
		},
		{
			text: 'To send cheese into the darkness of men\'s hearts - such is the duty of the pizza maker. - Robert Schumann',
			image: 'http://animatedpizzagifs.com/images/tumblr_lu5g1jW8wv1qb9pa3o1_500.gif',
			id: 22
		},
		{
			text: 'Pizza is magic delivered from the lie of being truth. - Theodor Adorno',
			image: 'http://animatedpizzagifs.com/images/tumblr_lrz62uwDDE1qdmv0so1_500.gif',
			id: 23
		},
		{
			text: 'Fine pizza is that in which the hand, the head, and the heart of man go together. - John Ruskin',
			image: 'http://animatedpizzagifs.com/images/tumblr_lrbsvocdZz1qeg9feo1_400.gif',
			id: 24
		},
		{
			text: 'In a decaying society, pizza, if it is truthful, must also reflect decay. And unless it wants to break faith with its social function, pizza must show the world as changeable. And help to change it. - Ernst Fischer',
			image: 'http://animatedpizzagifs.com/images/tumblr_lqd9bziCfC1qaq31ro1_500.gif',
			id: 25
		},
		{
			text: 'Every production of a pizza maker should be the expression of an adventure of his soul. - W. Somerset Maugham',
			image: 'http://animatedpizzagifs.com/images/3154846_o.gif',
			id: 26
		},
		{
			text: 'Pizza is a harmony parallel with nature. - Paul Cezanne',
			image: 'http://animatedpizzagifs.com/images/tumblr_lx7hz3pErC1qlhe27o1_500.gif',
			id: 27
		},
		{
			text: 'Pizza seems like some kind of peculiar miracle that I need to have again and again. - Philip Guston',
			image: 'http://animatedpizzagifs.com/images/tumblr_luhk9lwVvb1r0ix14o1_500.gif',
			id: 28
		},
		{
			text: 'Pizza is like a border of flowers along the course of civilization. - Lincoln Steffens',
			image: 'http://animatedpizzagifs.com/images/tumblr_lu7i9azRY21r0ix14o1_500.gif',
			id: 29
		},
		{
			text: 'Without pizza, the crudeness of reality would make the world unbearable. - George Bernard Shaw',
			image: 'http://animatedpizzagifs.com/images/tumblr_m19f5mrD6u1qh0vhjo1_250-1.gif',
			id: 30
		},
		{
			text: 'My imagination can picture no fairer happiness than to continue living for pizza. - Clara Schumann',
			image: 'http://animatedpizzagifs.com/images/i-put-that-pizza-on-a-pedestal.gif',
			id: 31
		},
		{
			text: 'In pizza as in love, instinct is enough. - Anatole France',
			image: 'http://animatedpizzagifs.com/images/illuminati_pizza_pyramid.gif',
			id: 32
		},
		{
			text: 'To make pizzas big is to make them more powerful. - Robert Mapplethorpe',
			image: 'http://animatedpizzagifs.com/images/pizza-frenchie-dog.gif',
			id: 33
		},
		{
			text: 'The essence of all pizza is to have pleasure in giving pleasure. - Dale Carnegie',
			image: 'http://animatedpizzagifs.com/images/pizzzatime.tumblr.gif',
			id: 34
		},
		{
			text: 'I don\'t want life to imitate pizza. I want life to be pizza. - Ernst Fischer',
			image: 'http://animatedpizzagifs.com/images/pizza-montage-on-the-beach.gif',
			id: 35
		}
	];

	var shuffleArray = function(array) {
		var m = array.length, t, i;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	}
	shuffleArray($scope.slides);

	var Pizza = {
			// config
			canvas:document.getElementById('pizza'),
			height:675,
			width:670,
			cor:'#ffffff',
			_init:function(){
				Pizza.ctx = Pizza.canvas.getContext("2d");
				Pizza.radius = Math.min(Pizza.width, Pizza.height) / 2;
				Pizza.center_x = Pizza.width/2;
				Pizza.center_y = Pizza.height/2;
			},
			_draw:function(percentual){
				Pizza.ctx.clearRect(0,0,Pizza.width,Pizza.height);
				Pizza.ctx.beginPath();
				Pizza.ctx.moveTo(Pizza.center_x, Pizza.center_y);
				Pizza.ctx.arc(
					Pizza.center_x,
					Pizza.center_y,
					Pizza.radius,
					Math.PI * (- 0.5),
					Math.PI * (- 0.5 + 2 * percentual/100),
					false
				);
				Pizza.ctx.closePath();
				Pizza.ctx.fillStyle = Pizza.cor;
				Pizza.ctx.fill();
			}
	}
	Pizza._init();
	Pizza._draw($scope.pieLeft); // canvas

});