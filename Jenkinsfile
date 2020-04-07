pipeline {
    agent any
    environment {
        AWS_DEFAULT_REGION = 'us-west-2'
        HOME = '.'
        CLUSTER_NAME='UnityQACluster'
        SERVICE_NAME='UnityELBService'
        TASK_FAMILY='UnityQATask'
        REPOSITORY_URI='239125824238.dkr.ecr.us-west-2.amazonaws.com/asunity'
    }
    options {
      withAWS(credentials:'aws-jenkins')
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'buildkite/puppeteer:v1.15.0'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'yarn install'
                sh 'yarn build'
                sh 'yarn build-storybook'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'buildkite/puppeteer:v1.15.0'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'yarn test'
                sh 'yarn start & yarn test:e2e'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Logging in to Amazon ECR...'
                sh 'aws --version'
                sh '$(aws ecr get-login --region $AWS_DEFAULT_REGION --no-include-email)'
                echo 'Building the Docker image...'
                sh 'docker build -t $REPOSITORY_URI:latest .'
                sh 'docker tag $REPOSITORY_URI:latest $REPOSITORY_URI:v_$BUILD_NUMBER'
                echo 'Pushing the Docker images...'
                sh 'docker push $REPOSITORY_URI:latest'
                sh 'docker push $REPOSITORY_URI:v_$BUILD_NUMBER'
                echo 'Deploying container to ECS..'
                sh 'aws ecs update-service --cluster $CLUSTER_NAME --service $SERVICE_NAME --force-redeployment'
            }
        }
    }
}
