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
        /// Get all projects for a user.
        /// </summary>
        /// <param name="userId">The user.</param>
        /// <returns>List of all projects.</returns>
        List<Project> GetUserProjects(Guid userId);
    }
}