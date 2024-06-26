// Import the editor
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

// Get the HTML element with the ID of 'app'.
const element = document.querySelector( '#app' );

// Instantiate the editor using the `create` method.
const editor = await ClassicEditor.create( element );
