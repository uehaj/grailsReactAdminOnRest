package sample
import grails.rest.*

@Resource(uri='/api/book')
class Book {
  String title
  Integer price

  static belongsTo = [author: Author]
}
