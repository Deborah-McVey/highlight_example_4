import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    HighlightDirective,
    FilterPipe,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'highlight_example_4';
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
    'Black Canary',
    'Black Panther',
    'Captain America',
    'Captain Marvel',
    'Catwoman',
    'Conan the Barbarian',
    'Daredevil',
    'The Defenders',
    'Doc Savage',
    'Doctor Strange',
    'Elektra',
    'Fantastic Four',
    'Ghost Rider',
    'Green Arrow',
    'Green Lantern',
    'Guardians of the Galaxy',
    'Hawkeye',
    'Hellboy',
    'Incredible Hulk',
    'Iron Fist',
    'Iron Man',
    'Marvelman',
    'Robin',
    'The Rocketeer',
    'The Shadow',
    'Spider-Man',
    'Sub-Mariner',
    'Supergirl',
    'Superman',
    'Teenage Mutant Ninja Turtles',
    'Thor',
    'The Wasp',
    'Watchmen',
    'Wolverine',
    'Wonder Woman',
    'X-Men',
    'Zatanna',
    'Zatara',
  ];
}
