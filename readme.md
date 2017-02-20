Angular 2: Getting Started - SnapShot 5
===================
En esta parte veremos estos contenidos del curso de Pluralshight:

 - Building Nested Components

----------

### 1 - Building Nested Components

----------

En esta eccion el objetio es crear un Nested Component, en concreto, a Star Component para las puntuaciones del producto.

![enter image description here](https://i.imgur.com/IPI3bLi.png)

#### Building & using a Nested Component
Para crear un Nested Component necesitamos una plantilla y una clase. Para utilizarlos necesitamos referenciarlo desde otro componente mediante la directiva definida, en este caso: **ai-star**
![enter image description here](https://i.imgur.com/lexsIP7.png)
#### Passing Data to Nested Component using @Input
Para representar la puntuacion del producto necesitamos indicar al componente que valor debe representar. Paa ellos utilizaremos un parametro @Input
#### Passing Data fromNested Component using @Output
En muchos casso necesitamos emitir mediante un evento alguna accion. Es importante recalcar que la unica manera de utilizar @Output es mediante un evento **EventEmmitter<>** En nuestro caso emiteremos un evento cuando se haga click dentro del componente.


----------


### 2 - Práctica


----------

Para ello clonamos el **SnapShot 5** desde le primer commit de:

    git clone https://github.com/tc-frontend/course_angular2_day1_snapshot5
    cd course_angular2_day1_snapshot5
    git checkout tags/init
    npm install
    code .

#### 1 - Creación nuevo componente para mostrar el rating

	import { Component, OnChanges } from '@angular/core';

	@Component({
	    selector: 'ai-star',
	    moduleId: module.id,
	    templateUrl: 'star.component.html',
	    styleUrls: ['star.component.css']
	})
	export class StarComponent implements OnChanges {
	    rating: number = 2;
	    starWidth: number;
	    ngOnChanges(): void {
	        debugger;
	        this.starWidth = this.rating * 86 / 5;
	    }

	   
	}
Añadimos una referencia a este componente en el módulo principal:
	
	  declarations: [ 
	    AppComponent,
	    ProductListComponent,
	    ProductFilterPipe,
	    StarComponent
	   ],

Modificamos el componente que lista los productos y añadimos una referencia en la columna que mostramos el rating

	<td>
		<ai-star></ai-star>
	</td>
https://goo.gl/kvS6PG

----------

#### 2 - Parámetro de entrada @Input 

Decoramos rating para que sea input:

	@Input() rating: number;
Utilizamos un property binding para pasar al componente el parámetro requerido:

	<ai-star [rating] ='product.starRating'></ai-star>

https://goo.gl/VqubqX

----------

#### 3 - Paramétro de salida @Output

Decoremos definiendo un parámetro de salida:

	@Output() ratingClicked: EventEmitter<string> = 
		new EventEmitter<string>();

Este parámetro define un evento el cual emitiremos cuando hagamos click sobre el componente:

	onClick(): void {
		this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
	} 

Nos subscribimos al evento desde la lista de componentes y cambiamso el header:

	 <ai-star [rating] ='product.starRating'
	  (ratingClicked)='onRatingCicked($event)'></ai-star>

Y en la clase:

	onRatingCicked(message: string):void{
		this.pageTitle = 'Product List:' + message;
	 }

https://goo.gl/zD3YSS


----------

    
Podemos ver los pasos detallados en el historial de commits:

    https://github.com/tc-frontend/tc-frontend-angular2_day1_snapshot5/commits/master   
  
Si queremos ver la App en nuestro browser

    npm start

Si queremos ver la solucion final de este SnapShot:

    git checkout master
    npm install
    npm start


 