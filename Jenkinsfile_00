pipeline {
    agent {
        docker { image 'node:18.15-alpine' }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test') {
            steps {
                sh 'npm t'
            }
        }
    }
}