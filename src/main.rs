use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use std::io::Result;

async fn test_index() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}
#[actix_web::main]
async fn main() -> Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(test_index))
    })
    .bind("127.0.0.01:8080")?
    .run()
    .await
}