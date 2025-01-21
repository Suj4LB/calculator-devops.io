pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Validate') {
            steps {
                sh '''
                npx html-validator-cli --file index.html
                npx stylelint "**/*.css"
                npx eslint "**/*.js"
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                npm install gh-pages --save-dev
                npx gh-pages -d .
                '''
            }
        }
    }
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
