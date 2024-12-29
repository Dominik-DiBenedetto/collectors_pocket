use backend::{ startup, telemetry, settings };

#[tokio::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();

    let settings = settings::get_settings().expect("Failed to read settings.");

    let subscriber = telemetry::get_subscriber(settings.clone().debug);
    telemetry::init_subscriber(subscriber);

    let application = startup::Application::build(settings).await?;

    tracing::event!(target: "backend", tracing::Level::INFO, "Listening on http://127.0.0.1:{}/", application.port());

    application.run_until_stopped().await?;
    Ok(())
}