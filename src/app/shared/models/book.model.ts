export class Book {

  public Id?: string;

  public Title?: string;

  public Authors?: string;

  public PublishedDate?: string;

  public Thumbnail?: string;

  constructor(data?: Partial<Book>) {
    Object.assign(this, data);
  }
}
