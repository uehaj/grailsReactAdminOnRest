package sample
import grails.rest.*

@Resource(uri='/api/author')
class Author {
  String name

  static hasMany = [books: Book]
}
