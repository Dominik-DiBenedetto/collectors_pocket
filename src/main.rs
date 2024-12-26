use actix_web::{get, post, web, App, HttpServer, HttpResponse, Responder,};
use std::path::PathBuf;

#[derive(Debug, serde::Deserialize, serde::Serialize)]
struct User {
    username: String,
    email: String,
}

// ROUTES

#[get("/")]
async fn home() -> impl Responder {
    "Welcome!"
}

#[get("/user/{user_id}/{collection}")]
async fn view_collection(info: web::Path<(u32, String)>) -> impl Responder {
    let (user_id, collection_name) = info.into_inner();
    HttpResponse::Ok().body(format!("User ID: {}; Collection: {}", user_id, collection_name))
}

#[post("/create_user")]
async fn create_user(user: web::Json<User>) -> impl Responder {
    let new_user = user.into_inner();
    // Process the new user data (e.g., save it to a database)
    HttpResponse::Created().json(new_user)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(home)
            .service(view_collection)
            .service(create_user)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}