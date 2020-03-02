// <copyright file="IProjectRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core;

    /// <summary>
    /// Manage all projects for a user.
    /// </summary>
    public interface IProjectRepository
    {
        /// <summary>
        /// Add a new project in the database.
        /// </summary>
        /// <param name="userId">The user identification.</param>
        /// <param name="projectName">The name of the project.</param>
        void Add(Guid userId, string projectName);

        /// <summary>
        /// Delete the specified project.
        /// </summary>
        /// <param name="userId">The user identification.</param>
        /// <param name="projectId">The id of the project.</param>
        void Delete(Guid userId, Guid projectId);

        /// <summary>
        /// Get all inforamtion about a project.
        /// </summary>
        /// <param name="userId">The user identification.</param>
        /// <param name="projectId">The id of the project.</param>
        /// <returns>The project.</returns>
        Project Get(Guid userId, Guid projectId);

        /// <summary>
        /// Get all projects for a user.
        /// </summary>
        /// <param name="userId">The user.</param>
        /// <returns>List of all projects.</returns>
        List<Project> GetAll(Guid userId);

        /// <summary>
        /// Update the specified project.
        /// </summary>
        /// <param name="userId">The user identification.</param>
        /// <param name="projectId">The id of the project.</param>
        /// <param name="name">The new name of the project.</param>
        void Update(Guid userId, Guid projectId, string name);
    }
}