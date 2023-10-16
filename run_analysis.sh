PATH_TO_SONAR=$1
$PATH_TO_SONAR/sonar-scanner \
-Dsonar.projectKey=promotions-management-frontend \
-Dsonar.sources=src/ \
-Dsonar.token=sqp_08ac60c44f14ba77312554534ea989665a57f33e \
-Dsonar.host.url=http://localhost:9000