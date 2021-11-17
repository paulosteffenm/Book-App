import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private apiService: ApiService) { }

  public getBook(term: string): Observable<Array<Book>> {
    return this.apiService.googleApiGet(`?q=${term}`).pipe(
      map((data) => data.items.map((item) => {
        try {
          return new Book({
            Id: item.id,
            Title: item.volumeInfo.title,
            Authors: item.volumeInfo.authors?.reduce((previousValue, currentValue) => `${previousValue}, ${currentValue}`) ?? 'No Authors',
            PublishedDate: item.volumeInfo?.publishedDate?.substring(0,4) ?? 'No Date Found',
            Thumbnail: item.volumeInfo?.imageLinks?.thumbnail ?? 'https://toppng.com/public/uploads/thumbnail/code-interrogation-blank-red-book-cover-11569063098miniyf8d0p.png',
          });
        } catch (ex) {
          console.error(ex);
          return new Book();
        }
      }))
    );
  }
}
